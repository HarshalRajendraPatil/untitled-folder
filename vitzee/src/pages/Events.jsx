import "./Events.Module.css";
import EventComp from "./../Components/EventComp";

function Events() {
  return (
    <div className="academics">
      <EventComp
        heading="Slide And Seek"
        description="
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque numquam veritatis minus odit voluptatibus soluta iusto molestias, eligendi id non odio fugiat eveniet optio enim laudantium labore harum iure eaque quae ut. Commodi maiores atque dolor aliquam earum quo, "
        link="https://docs.google.com/forms/d/e/1FAIpQLScXZRZe8D5vK5ti-dZtxaz0kbZQkjxZqUYQpHvKcPwDhbpPow/viewform"
        url="./event.png"
      />
      <EventComp
        heading="Slide And Seek"
        description="
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque numquam veritatis minus odit voluptatibus soluta iusto molestias, eligendi id non odio fugiat eveniet optio enim laudantium labore harum iure eaque quae ut. Commodi maiores atque dolor aliquam earum quo, "
        link="https://docs.google.com/forms/d/e/1FAIpQLScXZRZe8D5vK5ti-dZtxaz0kbZQkjxZqUYQpHvKcPwDhbpPow/viewform"
        url="./event.png"
      />
    </div>
  );
}

export default Events;
