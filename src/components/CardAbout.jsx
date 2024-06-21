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
function CardAbout() {
  return (
    <div style={styles.card}>
      <div style={styles.heading} id="about-me">About Me</div>
      <div style={styles.content}>
        `Welcome to my Portfolio Page! I am a full stack developer with a passion for creating and designing web applications. I have experience with HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am excited to continue learning and growing as a developer.`
      </div>
    </div>
  );
}

export default CardAbout;
