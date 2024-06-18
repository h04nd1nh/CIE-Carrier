import { defineStore, acceptHMRUpdate } from "pinia";

export const useCarceerStore = defineStore("carceer", () => {
  async function fetchBySlug(slug: string) {
    try {
      const result = await useFetch(`/api/user/${slug}`)
      return result.data;
    } catch (err: any) {
        console.log(err)
    }
  }

  async function fetchAll() {
    try {
      const result : any = await useFetch('/api/user/fetch-all')
      return result.data;
    } catch (err: any) {
        console.log(err)
    }
  }

  async function updateUser() {
    try {
      const result : any = await useFetch('/api/user/update')
      return result.data;
    } catch (err: any) {
        console.log(err)
    }
  }

  return {
    fetchBySlug,
    fetchAll,
    updateUser,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCarceerStore, import.meta.hot));
}
