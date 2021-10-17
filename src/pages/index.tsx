import type { NextPage } from "next";
import SafeEnviroment from "ui/components/feedback/SafeEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, CircularProgress, Container } from "@mui/material";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

const Home: NextPage = () => {
  const {
    cep,
    erro,
    setCep,
    loading,
    cepValido,
    searchDone,
    dayLaborers,
    remainingDaily,
    searchProfessionals,
  } = useIndex();

  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <FormElementsContainer>
        <TextFieldMask
          mask={"99.999-999"}
          label={"Digite seu CEP"}
          fullWidth
          variant={"outlined"}
          value={cep}
          onChange={(event) => setCep(event.target.value)}
        />

        {erro && <Typography color={"error"}>{erro}</Typography>}

        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{ width: "220px" }}
          disabled={!cepValido || loading}
          onClick={() => searchProfessionals(cep)}
        >
          {loading ? <CircularProgress size={20} /> : "Buscar"}
        </Button>
      </FormElementsContainer>

      {searchDone &&
        (dayLaborers.length > 0 ? (
          <ProfissionaisPaper>
            <ProfissionaisContainer>
              {dayLaborers.map((item, index) => {
                return (
                  <UserInformation
                    key={index}
                    name={item.full_name}
                    description={item.city}
                    rating={item.reputation}
                    picture={item.Photograph_user}
                  />
                );
              })}
            </ProfissionaisContainer>
            <Container sx={{ textAlign: "center" }}>
              {remainingDaily > 0 && (
                <Typography sx={{ mt: 5 }}>
                  ...e mais {remainingDaily}
                  {remainingDaily > 1
                    ? " profissionais atendem "
                    : " profissional atende "}
                  ao seu endereço.
                </Typography>
              )}
              <Button variant={"contained"} color={"secondary"} sx={{ mt: 5 }}>
                Contratar um profissional
              </Button>
            </Container>
          </ProfissionaisPaper>
        ) : (
          <Typography align={"center"} color={"textPrimary"}>
            Ainda não temos nenhuma diarista disponível na região
          </Typography>
        ))}
    </div>
  );
};

export default Home;
