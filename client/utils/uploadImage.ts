import axios from 'axios';

interface UploadImageReturnProps {
  height: number;
  size: number;
  url: string;
  width: number;
  filename: string;
}

export const uploadCountryImage = async (image: File): Promise<UploadImageReturnProps> => {
  const formData = new FormData();
  formData.append('image', image);

  const { data } = await axios.post('http://localhost:5000/country', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};
