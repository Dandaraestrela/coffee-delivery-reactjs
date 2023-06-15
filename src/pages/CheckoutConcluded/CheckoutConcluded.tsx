import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";
import { Tag, TagImage } from "@/components/DefaultStyles/Tag";
import * as S from "./CheckoutConcluded.styles";

import Delivery from "@/assets/delivery.png";
import { theme } from "@/styles/theme";

export function CheckoutConcluded() {
  const location = useLocation();

  const orderData = location.state;

  if (!orderData)
    return (
      <S.Wrapper>
        <h1>Peça um café hoje!</h1>
      </S.Wrapper>
    );
  return (
    <S.Wrapper>
      <S.CheckoutInfo>
        <S.Title>Uhu! Pedido confirmado</S.Title>
        <S.Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </S.Subtitle>
        <S.OrderInfo>
          <Tag>
            <TagImage backgroundColor={theme.colors.purple}>
              <MapPin size={16} color={theme.colors.white} weight="fill" />
            </TagImage>
            <p>
              Entrega em{" "}
              <strong>
                {orderData.street}, {orderData.number}
              </strong>
              <br />
              {orderData.neighborhood} - {orderData.city}, {orderData.district}
            </p>
          </Tag>
          <Tag>
            <TagImage backgroundColor={theme.colors.yellow}>
              <Timer size={16} color={theme.colors.white} weight="fill" />
            </TagImage>
            <p>
              Previsão de entrega
              <br />
              <strong> 20 min - 30 min</strong>
            </p>
          </Tag>
          <Tag>
            <TagImage backgroundColor={theme.colors.yellowDark}>
              <CurrencyDollar
                size={16}
                color={theme.colors.white}
                weight="fill"
              />
            </TagImage>
            <p>
              Pagamento na entrega
              <br />
              <strong> {orderData.paymentType}</strong>
            </p>
          </Tag>
        </S.OrderInfo>
      </S.CheckoutInfo>

      <S.DeliveryImg src={Delivery} alt="delivery image" />
    </S.Wrapper>
  );
}
