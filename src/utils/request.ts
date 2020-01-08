// export const BackendServerUrl = "http://localhost:3001";

// const responseResolver = async response => {
//   const resData = await response.json();
//   if (!response.ok) return { success: false, resData };
//   return { success: false, resData };
// };

// export const getReq = async ({ path, token }) => {
//   let options: RequestInit = {};
//   if (token) options.headers.Authorization = `Token ${token}`;
//   const response = await fetch(`${BackendServerUrl}${path}`, options);
//   const resData = await responseResolver(response);
//   return resData;
// };

// export const postReq = async ({ path, token, data }) => {
//   const options = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   };
//   if (token) options.headers.Authorization = `Token ${token}`;
//   const response = await fetch(`${BackendServerUrl}${path}`, options);
//   const resData = await responseResolver(response);
//   return resData;
// };

// export const patchReq = async ({ path, token, ...data }) => {
//   const options = {
//     method: "PATCH",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   };
//   if (token) options.headers.Authorization = `Token ${token}`;
//   const response = await fetch(`${BackendServerUrl}${path}`, options);
//   const resData = await responseResolver(response);
//   return resData;
// };

// export const deleteReq = async ({ path, token }) => {
//   const options = {
//     method: "DELETE",
//     headers: {}
//   };
//   if (token) options.headers.Authorization = `Token ${token}`;
//   const response = await fetch(`${BackendServerUrl}${path}`, options);
//   const resData = await responseResolver(response);
//   return resData;
// };
