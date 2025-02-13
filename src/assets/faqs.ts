type FAQ = {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What is twala?",
    answer:
      "Twala is an app that allows you or your customers to easily sign legally binding documents (e.g. lease agreement, contract of employment, sales contact, and more) online using any laptop or smartphone. Twala can also be used to issue tamper-proof digital credentials (e.g. digital diploma, certificate of employment, training certificates).",
  },
  {
    question: "Is Twala eSignature legally binding?",
    answer:
      "Yes, Twala is compliant with the Philippines’ E-Commerce Act and the Supreme Court’s Rules on Electronic Evidence. Twala is also legally accepted in other jurisdictions such as the US, EU, ASEAN, and many more.",
  },
  {
    question: "Do my customers need to pay in order to sign my documents?",
    answer:
      "No, your signers can create their Twala account for free and send/store 5 free documents per month. It is always free for your signers to sign documents.",
  },
  {
    question: "What is a Sender?",
    answer:
      "A sender is someone who sends documents and requests for esignature. We bill for the number of senders and not the number of signers.",
  },
  {
    question: "How does Twala verify the identity of the signers?",
    answer:
      "Twala has multiple levels of signatory verification. Twala verifies the signatory’s email, mobile number, and name via an artificial intelligence-enabled ID verification process where we ask for a government-issued ID and a selfie.",
  },
  {
    question: "Is Twala secured?",
    answer:
      "Twala uses multiple levels of user authentication and all communication within the app are protected by Transport Layer Security (TLS). All data is stored in SOC 1 Type II, SOC 2 Type I, and ISO 27001 certified data centers. All documents are stored and encrypted at rest using AES 256-bit encryption.Twala also supports passwordless authentication/login as well as secure document signing by scanning a QR code or via a push notification. This is made possible by Twala’s blockchain-powered digital ID.",
  },
];
