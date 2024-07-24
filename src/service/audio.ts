import { AudioProp } from "@/models/audio";
import baseApi from "./config";
import { AudioType } from "@/schema/audioSchema";

export const getAllListAudios = () => baseApi.get<AudioProp>("audios");
 
export const audioAdd = (data: File) => {
  const formData = new FormData();
  formData.append('audio', data);

  return baseApi.post("upload", formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  });
};


export const deleteAudio = (id: number) => baseApi.delete(`audios/${id}`); 
