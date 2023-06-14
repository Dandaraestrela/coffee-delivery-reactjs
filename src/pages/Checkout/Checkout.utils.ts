import * as Yup from "yup";

export type FormDataType = {
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  district: string;
  complement: string;
};

export const defaultValues: FormDataType = {
  cep: "",
  street: "",
  number: "",
  neighborhood: "",
  city: "",
  district: "",
  complement: "",
};

export const schema = Yup.object({
  cep: Yup.string().required("Campo obrigatório"),
  street: Yup.string().required("Campo obrigatório"),
  number: Yup.string().required("Campo obrigatório"),
  neighborhood: Yup.string().required("Campo obrigatório"),
  city: Yup.string().required("Campo obrigatório"),
  district: Yup.string().required("Campo obrigatório"),
  complement: Yup.string().required("Campo obrigatório"),
});
