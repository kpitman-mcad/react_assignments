function Home() {
  return (
    <div className="home-div">
      <h3>Information about these sketches</h3>

      <section className="home">
        <p>
          This site is a collection of a few sketches built in p5.js, and
          deployed locally in React. The implementation of these sketches within
          react is intended as a proof of concept for future more complicated
          projects and interactivity.
        </p>
        <p>
          Below is some background related to each of the sketches available
          here.
        </p>

        <h4>irrEggular</h4>
        <p>Mind chicken levitates eggs above their head.</p>
        <p>
          This was the first test p5.js sketch deployed to the site, and was the
          first successful iteration of the concept. The code is relatively
          simple and short, however the implementation was somewhat challenging
          in that it required learning how to successfully import the p5
          library, as well as identifying which functions required the library
          to be passed in.
        </p>

        <h4>Not A Bird On A Wire</h4>
        <p>
          Birds on a wire! Click anywhere to move the flock and discover the
          secret.
        </p>
        <p>
          This sketch was the first test case for splitting up one sketch into
          separate js files, then importing classes from the separate file into
          the primary js sketch file. The sketch loads a bit more slowly as
          React must locate and import several PNG image files.
        </p>
        <p>Check out the satire site for Birds Aren't Real:</p>
        <a href="https://birdsarentreal.com/pages/evidence">
          Birds Aren't Real Evidence
        </a>
        <h4>Dungeonion</h4>
        <p>A simple text adventure game.</p>
        <p>
          This was by far the most complicated and troublesome sketch to run
          natively in React. I included at least 9 separate js files, and was
          required to import multiple functions and classes. React also requires
          that all variables must be passed to functions and classes explicitly.
          The p5.js editor tool we have used most frequently is much more
          forgiving and passes variables more easily between separate files as
          long as they are within the same folders.
        </p>
        <p>
          I extended and brought the original assignment sketch to a more
          complete state with better interactivity and illustrations to track
          item inventory.
        </p>
        <p>
          Inputs are the cardinal directions, North, South, East, and West.
          Interaction inputs can include “pick up, take, grab, drop, leave, set
          down, etc…”
        </p>
        <h4>Notes</h4>
        <p>
          Unfortunately these p5.js sketches will not scale down on mobile
          views, so desktop veiwing is preferable.
        </p>
      </section>
    </div>
  );
}
export default Home;
