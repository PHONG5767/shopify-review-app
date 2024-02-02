// import { useForm, useWatch, FormProvider } from "react-hook-form";
// import styled from "styled-components";

// const StyledColorInputWrapper = styled.div`
//   height: 1.5em;
//   width: 1.5em;
//   overflow: hidden;
//   border-radius: 50%;
//   display: inline-flex;
//   align-items: center;
//   position: relative;
// `;
// const Input = styled.input`
// position: absolute;
// height: 4em;
// width: 4em;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
// overflow: hidden;
// border: none;
// margin: 0;
// padding: 0;
// `

// function Child() {
//   const colorValue = useWatch({
//     name: "color",
//   });

//   return <p>Selected Color: {colorValue}</p>;
// }

// export default function Reviews() {
//   const formMethods = useForm({
//     defaultValues: {
//       color: "#e66465",
//     },
//   });
//   const { register } = formMethods

//   return (
//     <FormProvider {...formMethods}>
//       <form>
//         <StyledColorInputWrapper>
//           <Input
//             type="color"
//             id="color"
//             {...register("color")}
//           />
//         </StyledColorInputWrapper>
//         <Child />
//       </form>
//     </FormProvider>
//   );
// }
