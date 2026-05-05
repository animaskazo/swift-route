interface ImageSectionProps {
  image: string;
  alt: string;
  title?: string;
  description?: string;
  height?: string;
}

export const ImageSection = ({ image, alt, title, description, height = 'h-[500px]' }: ImageSectionProps) => {
  return (
    <section className={`w-full ${height} relative overflow-hidden`}>
      <img 
        src={image} 
        alt={alt} 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      {(title || description) && (
        <div className="absolute inset-0 bg-brevo-dark/30 backdrop-blur-[2px] flex items-center justify-center">
            <div className="max-w-4xl px-6 text-center">
                {title && <h2 className="text-4xl lg:text-6xl font-display font-bold text-white tracking-tighter mb-6">{title}</h2>}
                {description && <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto">{description}</p>}
            </div>
        </div>
      )}
    </section>
  );
};
