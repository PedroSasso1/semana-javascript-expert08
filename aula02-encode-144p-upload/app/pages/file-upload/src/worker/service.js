export default class Service {
  #url;

  constructor({ url }) {
    this.#url = url;
  }

  async uploadFile({ fileName, fileBuffer }) {
    const formData = new FormData();
    formData.append(fileName, fileBuffer);
    console.log("uploading file", fileName);
    const response = await fetch(this.#url, {
      method: "POST",
      body: formData,
    });
    console.assert(response.ok, "response is not ok", response);
    return response;
  }
}
