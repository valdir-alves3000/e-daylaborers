import { useMemo, useState } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    [erro, setErro] = useState(""),
    [searchDone, setSearchDone] = useState(false),
    [loading, setLoading] = useState(false),
    [dayLaborers, setDayLaborers] = useState([] as UserShortInterface[]),
    [remainingDaily, setRemainingDaily] = useState(0),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]);

  async function searchProfessionals(cep: string) {
    setLoading(true);
    setSearchDone(false);
    setErro("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        qtd_diaristas: number;
      }>("/api/diaristas-cidade?cep=" + cep.replace(/\D/g, ""));
      setDayLaborers(data.diaristas);
      setRemainingDaily(data.qtd_diaristas);
      setSearchDone(true);
      setLoading(false);
    } catch (error) {
      setErro("CEP não encontrado");
      setLoading(false);
    }
  }

  return {
    cep,
    erro,
    setCep,
    loading,
    cepValido,
    searchDone,
    dayLaborers,
    remainingDaily,
    searchProfessionals,
  };
}
