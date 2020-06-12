import router from "@/router/index";
// import { Route } from "vue-router";
export const goToRedirect = () => {
  router.replace("/")
  // router.push("/login")
};
// export function openPage(value, type) {
//   if (type === OpenJumpType.path) {
//     if (value.includes("http") || value.includes("https")) {
//       window.location.href = value;
//     } else {
//       router.push({
//         path: value,
//       });
//     }
//     return;
//   }
//   if (type === OpenJumpType.name) {
//     router.push({
//       name: value,
//     });
//     return;
//   }
//   if (type === OpenJumpType.url) {
//     window.open(value, "_blank");
//     return;
//   }
//   if (type === OpenJumpType.bind) {
//     window.location.href = value;
//     return;
//   }
//   if (type === OpenJumpType.spa) {
//     router.push({
//       path: `/spa${value}`,
//     });
//     return;
//   }
// }