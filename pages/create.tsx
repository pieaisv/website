import dynamic from "next/dynamic";

const FormEvent = dynamic(() => import("../components/FormEvent"), {
  ssr: false,
});


function Create() {
  return (
    <>
      <FormEvent />
    </>
  );
}

export default Create;
