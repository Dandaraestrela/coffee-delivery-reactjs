import { useContext, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

import * as S from "./Checkout.styles";

import TextInput from "@/components/TextInput/TextInput";
import { Row } from "@/components/DefaultStyles/Row";
import { FormDataType, defaultValues, schema } from "./Checkout.utils";
import { SectionHeader } from "./SectionHeader/SectionHeader";
import { theme } from "@/styles/theme";
import { SelectableButton } from "./SelectableButton/SelectableButton";
import { CartContext, useCartContext } from "@/contexts/CartContext";
import { beverages } from "../Home/Home.utils";
import { CartProduct } from "./CartProduct/CartProduct";
import { routesURLs } from "@/Router";
import { useNavigate } from "react-router-dom";

type PaymentTypes = "Cartão de crédito" | "Cartão de débito" | "Dinheiro";

export function Checkout() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const {
    productsList,
    updateProductQuantity,
    removeProductFromCart,
    clearCart,
  } = useCartContext();
  const [paymentType, setPaymentType] =
    useState<PaymentTypes>("Cartão de crédito");

  const productsWithInfo = useMemo(
    () =>
      productsList?.map((product) => ({
        ...product,
        productInfo: { ...beverages[+product.id] },
      })),
    [productsList, updateProductQuantity, removeProductFromCart]
  );

  const totalPrice = useMemo(
    () =>
      productsWithInfo.reduce(
        (accumulator, product) =>
          accumulator +
          product.quantity * parseFloat(product.productInfo.price),
        0
      ),
    [productsList]
  );

  const onSubmit = (data: FormDataType) => {
    clearCart();
    navigate(routesURLs.checkoutConcluded, { state: { ...data, paymentType } });
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <S.SectionWrapper>
        <S.Title>Complete seu pedido</S.Title>
        <S.UserInfo>
          <SectionHeader
            icon={<MapPinLine size={22} color={theme.colors.yellowDark} />}
            title="Endereço de entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
          />
          <Row marginTop={12}>
            <TextInput
              label="CEP"
              placeholder="CEP"
              col={5}
              {...register("cep")}
              error={errors.cep?.message}
            />
          </Row>
          <Row marginTop={4}>
            <TextInput
              label="Rua"
              placeholder="Rua"
              {...register("street")}
              error={errors.street?.message}
            />
          </Row>
          <Row gap={8} marginTop={4}>
            <TextInput
              label="Número"
              placeholder="Número"
              {...register("number")}
              error={errors.number?.message}
              col={7}
            />
            <TextInput
              label="Complemento"
              placeholder="Complemento"
              {...register("complement")}
              error={errors.complement?.message}
            />
          </Row>
          <Row gap={8} marginTop={4}>
            <TextInput
              label="Bairro"
              placeholder="Bairro"
              {...register("neighborhood")}
              error={errors.neighborhood?.message}
              col={7}
            />
            <TextInput
              label="Cidade"
              placeholder="Cidade"
              {...register("city")}
              error={errors.city?.message}
            />
            <TextInput
              label="UF"
              placeholder="UF"
              {...register("district")}
              error={errors.district?.message}
              col={2}
            />
          </Row>
        </S.UserInfo>
        <S.PaymentInfo>
          <SectionHeader
            icon={<CurrencyDollar size={22} color={theme.colors.purple} />}
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          />
          <Row gap={4} marginTop={12} turnInColumnWhen={1000}>
            <SelectableButton
              icon={<CreditCard size={20} color={theme.colors.purple} />}
              text="Cartão de crédito"
              onClick={() => setPaymentType("Cartão de crédito")}
              isSelected={paymentType === "Cartão de crédito"}
            />
            <SelectableButton
              icon={<Bank size={20} color={theme.colors.purple} />}
              text="Cartão de débito"
              onClick={() => setPaymentType("Cartão de débito")}
              isSelected={paymentType === "Cartão de débito"}
            />
            <SelectableButton
              icon={<Money size={20} color={theme.colors.purple} />}
              text="Dinheiro"
              onClick={() => setPaymentType("Dinheiro")}
              isSelected={paymentType === "Dinheiro"}
            />
          </Row>
        </S.PaymentInfo>
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.Title>Cafés selecionados</S.Title>
        <S.ProductsInfo>
          <S.ProductsListWrapper>
            {productsWithInfo.length ? (
              productsWithInfo.map((product) => (
                <Row marginBottom={12}>
                  <CartProduct
                    key={product.id}
                    imgSrc={product.productInfo.image}
                    productName={product.productInfo.name}
                    quantity={product.quantity}
                    unitPrice={product.productInfo.price}
                    totalPrice={
                      product.quantity * parseFloat(product.productInfo.price)
                    }
                    onAdd={() =>
                      updateProductQuantity(product.id, product.quantity + 1)
                    }
                    onSub={() =>
                      updateProductQuantity(product.id, product.quantity - 1)
                    }
                    onRemove={() => removeProductFromCart(product.id)}
                  />
                </Row>
              ))
            ) : (
              <p>Você ainda não tem produtos no carrinho!</p>
            )}
          </S.ProductsListWrapper>
          <S.HorizontalDivisor />
          <S.TotalInfoWrapper>
            <S.TotalInfoSmallText>Total de itens</S.TotalInfoSmallText>
            <S.TotalInfoSmallText>
              R$ {totalPrice.toFixed(2)}
            </S.TotalInfoSmallText>
          </S.TotalInfoWrapper>
          <S.TotalInfoWrapper>
            <S.TotalInfoSmallText>Entrega</S.TotalInfoSmallText>
            <S.TotalInfoSmallText>Grátis</S.TotalInfoSmallText>
          </S.TotalInfoWrapper>
          <S.TotalInfoWrapper>
            <S.TotalInfoLargeText>Total</S.TotalInfoLargeText>
            <S.TotalInfoLargeText>
              R$ {totalPrice.toFixed(2)}
            </S.TotalInfoLargeText>
          </S.TotalInfoWrapper>
          <S.ConfirmButton type="submit" disabled={!productsWithInfo.length}>
            Confirmar pedido
          </S.ConfirmButton>
        </S.ProductsInfo>
      </S.SectionWrapper>
    </S.FormWrapper>
  );
}
