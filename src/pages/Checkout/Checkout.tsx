import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MapPinLine } from "@phosphor-icons/react";

import * as S from "./Checkout.styles";

import TextInput from "@/components/TextInput/TextInput";
import { Row } from "@/components/DefaultStyles/Row";
import { FormDataType, defaultValues, schema } from "./Checkout.utils";
import { SectionHeader } from "./SectionHeader/SectionHeader";

export function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const [v, setV] = useState("");

  const onSubmit = (data: FormDataType) => console.log(data);
  console.log(errors);
  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <button type="submit">teste</button>
      <S.SectionWrapper>
        <S.Title>Complete seu pedido</S.Title>
        <S.UserInfo>
          <SectionHeader icon={<MapPinLine />} title="Endereço de entrega" />
          <TextInput
            label="CEP"
            placeholder="CEP"
            col={6}
            {...register("cep")}
            error={errors.cep?.message}
          />
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
        <S.UserInfo>Pagamento</S.UserInfo>
      </S.SectionWrapper>
      <S.SectionWrapper>
        <S.Title>Cafés selecionados</S.Title>
        <S.ProductsInfo>Expresso Tradicional</S.ProductsInfo>
      </S.SectionWrapper>
    </S.FormWrapper>
  );
}
