import { requests } from "@/service/ajax";

export const getRecommend = () => requests("/api/getRecommend");

export const getAlbum = (album) => requests("/api/getAlbum", { id: album.id });
