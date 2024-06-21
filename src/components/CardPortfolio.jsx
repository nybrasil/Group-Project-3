// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function CardPortfolio() {
  return (
    <div style={styles.card} id="my-work">
      <div style={styles.heading}>My Portfolio</div>
      <div style={styles.content}>
        `Please find below links to my github projects: `
      </div>
      <ul style={styles.content}>
        <li><a href="https://rdtauche.github.io/TravelWebsite/">My Travel Website</a></li>
        <li><a href="https://rdtauche.github.io/myPortfolioWebsite/">My Portfolio Website</a></li>
        <li><a href="https://fxtradingbook.com/">My FX Website</a></li>
      </ul>
    </div>
  );
}

export default CardPortfolio;
