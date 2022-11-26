import { axiosBase as axios } from "./Config";

export const Createpost = async (data) => {
  try {
    const res = await axios.post("/formato_review", data);

    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const Getpost = async () => {
  try {
    const res = await axios.get("/formato_review");

    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const Updatepost = async (id) => {
  try {
    const res = await axios.delete(`/formato_review/${id}`);

    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const GetAllpostsOfUser = async (id) => {
  try {
    const res = await axios.get(`/formato_review/usuario/${id}`);

    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const UpdatepostFU = async (id, data) => {
  try {
    const res = await axios.put(`/formato_review/${id}`, data);

    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};