const MapSection = () => (
  <div className="rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.2687597349773!2d-122.08250668440622!3d37.42199997982557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf8b8888888%3A0x4c54c4efbb8988c!2sGoogleplex!5e0!3m2!1sen!2sus!4v1668209999623!5m2!1sen!2sus"
      className="w-full h-full"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
    ></iframe>
  </div>
);

export default MapSection;
