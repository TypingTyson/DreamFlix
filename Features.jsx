export default function Features() {
  const featureList = [
    {
      title: "Watch Anywhere",
      description: "Stream on your phone, tablet, laptop, and TV without paying more.",
      icon: "📱",
    },
    {
      title: "Cancel Anytime",
      description: "No commitments, no cancellation fees. Come and go as you please.",
      icon: "❌",
    },
    {
      title: "Profiles for Everyone",
      description: "Create profiles for kids and family with personalized recommendations.",
      icon: "👪",
    },
    {
      title: "Unlimited Entertainment",
      description: "Thousands of movies and TV shows, always something to watch.",
      icon: "🎬",
    },
  ];

  return (
    <section className="features" aria-labelledby="features-heading">
      <h2 id="features-heading" className="visually-hidden">Features</h2>
      {featureList.map((feature, index) => (
        <div className="feature" key={index}>
          <div role="img" aria-label={feature.title} style={{ fontSize: "2rem" }}>
            {feature.icon}
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}