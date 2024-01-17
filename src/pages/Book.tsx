import { Questionnaire } from "@/components/Questionnaire";
import { Layout } from "@/components/layout/Layout";
import { PageTitle } from "@/components/layout/PageTitle";
import { TQuestion } from "@/interfaces/question";
import { MailCheck, PhoneCall, Receipt, UserRound } from "lucide-react";

const registerForm: TQuestion[] = [
  {
    label: "Please enter your name",
    type: "text",
    name: "name",
    required: true,
    icon: <UserRound />,
    value: "",
  },
  {
    label: "Please enter your email",
    type: "email",
    name: "email",
    icon: <MailCheck />,
    required: true,
    value: "",
  },
  {
    label: "Please enter your phone number",
    type: "text",
    name: "phoneNumber",
    icon: <PhoneCall />,
    value: "",
  },
  {
    label: "What is your salary indication",
    type: "radio",
    required: true,
    icon: <Receipt />,
    options: [
      { label: "0 - 1.000", value: "s" },
      { label: "1.000 - 2.000", value: "m" },
      { label: "2.000 - 3.000", value: "l" },
      { label: "3.000 - 4.000", value: "xl" },
      { label: "Mehr als 4.000", value: "v" },
    ],
    name: "indication",
    value: "",
  },
];

const Book = () => {
  return (
    <Layout>
      <div className="py-4 w-full flex flex-col">
        <PageTitle
          title="Booking apartments"
          subTitle="Here you can start your journey"
        />
        <Questionnaire questions={registerForm} />
      </div>
    </Layout>
  );
};

export default Book;
