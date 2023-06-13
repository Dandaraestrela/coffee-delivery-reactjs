import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";

import * as S from "./Header.styles";

import { theme } from "@/styles/theme";

import { ReactComponent as Logo } from "@/assets/Logo.svg";
import { routesURLs } from "@/Router";

export function Header() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("Carregando...");

  const formatLocation = useCallback(
    async (latitude: number, longitude: number, deniedFlag: boolean) => {
      if (deniedFlag) {
        setLocation("Localização negada");
        return;
      }
      try {
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        )
          .then((response) => response.json())
          .then((data) => data);
        setLocation(`${response.city}, ${response.principalSubdivisionCode}`);
      } catch (err) {
        return "";
      }
    },
    [navigator.geolocation]
  );

  useEffect(() => {
    const getLocation = async () => {
      await navigator.geolocation.getCurrentPosition(
        (location: GeolocationPosition) =>
          formatLocation(
            location.coords.latitude,
            location.coords.longitude,
            false
          ),
        () => formatLocation(0, 0, true)
      );
    };

    getLocation();
  }, []);

  return (
    <S.Wrapper>
      <Link to={routesURLs.home}>
        <Logo />
      </Link>
      <S.ActionsWrapper>
        <S.Location>
          <MapPin size={22} color={theme.colors.purple} weight="fill" />
          {location}
        </S.Location>
        <Link to={routesURLs.checkout}>
          <S.Cart>
            <ShoppingCartSimple
              size={22}
              color={theme.colors.yellowDark}
              weight="fill"
            />
          </S.Cart>
        </Link>
      </S.ActionsWrapper>
    </S.Wrapper>
  );
}
