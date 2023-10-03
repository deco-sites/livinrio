import { useState } from "preact/compat";

export interface form {
  formTitle: string;
  formSubTitle: string;
}

export default function GetInTouch({ formTitle, formSubTitle }: form) {
  const [showSuccessful, setShowSuccessfull] = useState(false);

  const [formData, setFormData] = useState({
    Fullname: "",
    CompanyWebsite: "",
    Email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: Event) => {
    e.preventDefault();

    const baseId = "appZMXlRxzy8FyAbI";
    const tableId = "tblq8nQIS4eLVlAiJ";
    const apiKey =
      "patYrFQxcbEfaTfQ3.f92a02ac3ffac677489af2588c1006875809c5b32ae685868709567c847e7e5a";

    fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: formData,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Successfully posted data to Airtable:", responseData);
        setShowSuccessfull(true);
      })
      .catch((error) => {
        console.error("Error posting data to Airtable:", error);
      });
  };

  return (
    <div class="">
      <div class="mb-8">
        <h1 class="text-[#252D29] font-crimsontext text-2xl font-bold text-center mb-3">
          {formTitle}
        </h1>
        <p class="text-[#616161] font-sfprodisplay font-normal text-center text-xs">
          {formSubTitle}
        </p>
      </div>

      <div class="px-4 flex flex-col justify-center items-center">
        <form
          onSubmit={handleFormSubmit}
          class="w-full flex flex-col items-center"
        >
          <div class="w-full max-w-[400px] flex flex-col items-center">
            <label class="font-sfprodisplay font-normal w-full text-xs text-[#252D29]">
              Your complete name
            </label>
            <input
              class="w-full py-[10px] px-[14px] border-[1px] border-solid border-[rgba(171, 171, 171, 0.40)] rounded-lg mt-[6px]"
              type="text"
              name="Fullname"
              aria-labelledby="Full name"
              value={formData.Fullname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div class="w-full max-w-[400px] flex flex-col items-center my-4">
            <label class="font-sfprodisplay font-normal w-full text-xs text-[#252D29]">
              Company website
            </label>
            <input
              class="w-full py-[10px] px-[14px] border-[1px] border-solid border-[rgba(171, 171, 171, 0.40)] rounded-lg mt-[6px]"
              type="text"
              name="CompanyWebsite"
              aria-labelledby="Company Website"
              value={formData.CompanyWebsite}
              onChange={handleInputChange}
              required
            />
          </div>
          <div class="w-full max-w-[400px] flex flex-col items-center">
            <label class="font-sfprodisplay font-normal w-full text-xs text-[#252D29]">
              Email
            </label>
            <input
              class="w-full py-[10px] px-[14px] border-[1px] border-solid border-[rgba(171, 171, 171, 0.40)] rounded-lg mt-[6px]"
              type="text"
              name="Email"
              aria-labelledby="E-mail"
              value={formData.Email}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            class="font-sfprodisplay font-medium flex items-center justify-center max-h-[40px] max-w-[400px] mt-8 text-white text-center bg-[#343F39] rounded-lg w-full py-4"
          >
            Get in touch with us
          </button>
          {showSuccessful
            ? (
              <span class="font-sfprodisplay font-normal w-full text-xs text-[#252D29] max-w-[400px] flex justify-end mt-3">
                Enviado com sucesso.
              </span>
            )
            : null}
        </form>
      </div>
    </div>
  );
}
