interface FAQProps {
  faqProps: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}
function Faq({ faqProps }: FAQProps) {
  return (
    <div className="p-4">
      <br />
      <br />
      <br />
      <br />
      <div className="text-center">
        <div id="faq" className="text-3xl md:text-5xl font-extrabold">
          <span>FAQ</span>
        </div>
      </div>
      <br />
      <div>
        <div className="text-xl flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {faqProps.map(({ id, title, description }) => {
            return (
              <div key={id} className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer bg-gray-200 rounded-md py-2 px-4 mb-3">
                    {title}
                  </summary>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;
