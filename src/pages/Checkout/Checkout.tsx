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

type PaymentTypes = "credit" | "debt" | "money";

export function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const { productsList, updateProductQuantity, removeProductFromCart } =
    useCartContext();
  const [paymentType, setPaymentType] = useState<PaymentTypes>("credit");
  console.log(productsList);
  const productsWithInfo = useMemo(
    () =>
      productsList?.map((product) => ({
        ...product,
        productInfo: { ...beverages[+product.id] },
      })),
    [productsList, updateProductQuantity, removeProductFromCart]
  );

  const onSubmit = (data: FormDataType) => console.log(data);
  console.log(errors);
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
        <S.UserInfo>
          <SectionHeader
            icon={<CurrencyDollar size={22} color={theme.colors.purple} />}
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          />
          <Row gap={4} marginTop={12}>
            <SelectableButton
              icon={<CreditCard size={20} color={theme.colors.purple} />}
              text="Cartão de crédito"
              onClick={() => setPaymentType("credit")}
              isSelected={paymentType === "credit"}
            />
            <SelectableButton
              icon={<Bank size={20} color={theme.colors.purple} />}
              text="Cartão de débito"
              onClick={() => setPaymentType("debt")}
              isSelected={paymentType === "debt"}
            />
            <SelectableButton
              icon={<Money size={20} color={theme.colors.purple} />}
              text="Dinheiro"
              onClick={() => setPaymentType("money")}
              isSelected={paymentType === "money"}
            />
          </Row>
        </S.UserInfo>
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.Title>Cafés selecionados</S.Title>
        <S.ProductsInfo>
          {productsWithInfo ? (
            productsWithInfo.map((product) => (
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
            ))
          ) : (
            <h1>você não tem produtos no carrinho!</h1>
          )}
        </S.ProductsInfo>
      </S.SectionWrapper>
    </S.FormWrapper>
  );
}
