import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  {
    question: "O material é físico ou digital?",
    answer: "O produto é digital. Os materiais são disponibilizados em PDF na plataforma de acesso.",
  },
  {
    question: "Posso imprimir os mapas mentais?",
    answer: "Sim. Os mapas estão separados em tamanho A4 em formato horizontal e podem ser impressos para uso pessoal.",
  },
  {
    question: "Consigo acessar no celular, tablet e computador?",
    answer: "Sim. Você pode abrir os arquivos em PDF no celular, tablet ou computador usando um leitor de PDF.",
  },
  {
    question: "O que está incluso?",
    answer: "Você recebe mais de 100 mapas mentais, questões para revisar com gabarito comentado e flashcards para facilitar a memorização.",
  },
  {
    question: "Como eu recebo o material depois da compra?",
    answer: "Depois da confirmação do pagamento, a Kiwify libera o acesso via e-mail.",
  },
  {
    question: "Como funcionam as atualizações?",
    answer: "Novos materiais adicionados ao produto podem ser visualizados pela plataforma de acesso. Estarão com a data de atualização (exemplo: atualizado em 18.08.2026).",
  },
];

const FAQSection = () => (
  <section id="duvidas-frequentes" aria-labelledby="faq-title" className="section-padding bg-[#faf7fc] text-[#281a36]">
    <div className="container-narrow">
      <h2 id="faq-title" className="section-title mb-10 text-center">
        <span className="text-[#08788c]">Dúvidas</span>{" "}
        <span className="text-[#bf1668]">frequentes</span>
      </h2>
      <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-3">
        {questions.map(({ question, answer }, index) => (
          <AccordionItem key={question} value={`question-${index}`} className="overflow-hidden rounded-2xl border border-[#e5dbea] bg-white px-5 shadow-sm sm:px-6">
            <AccordionTrigger className="gap-4 py-5 text-left font-heading text-base font-semibold text-[#281a36] hover:text-[#bf1668] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#bf1668] sm:text-lg [&>svg]:text-[#bf1668]">
              {question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-relaxed text-[#594b65]">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
