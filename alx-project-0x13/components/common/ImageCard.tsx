import React from "react";

interface ImageCardProps {
  imageUrl: string;
  prompt: string;
  action: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, prompt, action }) => {
  return (
    <div className="border p-2 rounded shadow" onClick={action}>
      <img src={imageUrl} alt={prompt} className="w-full rounded" />
      <p className="mt-2 text-sm">{prompt}</p>
    </div>
  );
};

export default ImageCard;
