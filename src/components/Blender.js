import React from "react";
import Interactive from "react-interactive";
import { Link, Route, Switch } from "react-router-dom";
import blender from "./blender.json"; // TODO: use Axios or fetch to get this dynamically
import Carousel from "./Carousel";
import PageNotFound from "./PageNotFound";

function toTitleCase(str) {
  return str
    .replace(/-/g, " ")
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1));
}

function projectTitle(project) {
  return project.title == null ? toTitleCase(project.name) : project.title;
}

function dateFormat(date) {
  if (date == null) {
    return "";
  }
  const dateSplit = date.split("/");
  if (dateSplit.length !== 3) {
    return date;
  }
  // TODO: consider using a better formatter like MomentJS
  return Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]));
}

function displayElement(element, projectName) {
  const subfolder = element.subfolder == null ? "" : `/${element.subfolder}`;
  switch (element.type) {
    case "text":
      return <p style={element.style}>{element.text}</p>; // TODO: format text
    case "images":
      // TODO: consider fixed height
      return (
        <div style={element.style}>
          <Carousel
            folder={`../../assets/${projectName}${subfolder}`}
            captions={element.captions}
            aspectRatio={element.aspectRatio}
          />
        </div>
      );
    case "youtube":
      return (
        <iframe
          width="800vw"
          height="450vw"
          src={`https://www.youtube-nocookie.com/embed/${element.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen="1"
          className="youtube"
          style={element.style}
        />
      );
    default:
      throw new Error(`unknown element type: ${element.type}`);
  }
}

function blenderLink(project, index) {
  return (
    <div className="blenderLink">
      <Interactive as={Link} to={`/blender/${project.name}`}>
        <img
          src={`../../assets/${project.name}/thumbnail.jpg`}
          alt="thumbnail"
        />
        {/* // TODO: should this be TitleDate? */}
        <div className="titleDate">
          <div className="title">
            <em>
              {index + 1}. {projectTitle(project)}
            </em>
          </div>
          <div className="date">{dateFormat(project.date)}</div>
        </div>
      </Interactive>
    </div>
  );
}

export default function Blender() {
  return (
    <React.Fragment>
      <Switch>
        {blender.projects.map(
          (project, index) => (
            <Route
              exact
              path={`/blender/${project.name}`}
              render={() => (
                <React.Fragment>
                  {/* // TODO: should this be TitleDate? */}
                  <div className="titleDate">
                    <h1
                      className="title titleLarge"
                      style={{ display: "inline" }}
                    >
                      {index + 1}. {projectTitle(project)}
                    </h1>
                    {project.alias != null &&
                      project.alias.trim().length > 0 && (
                        <div className="alias">&quot;{project.alias}&quot;</div>
                      )}
                    <div className="date">{dateFormat(project.date)}</div>
                  </div>
                  {project.elements != null &&
                    project.elements.map((element) =>
                      displayElement(element, project.name),
                    )}
                  <br />
                  <div>
                    {index > 0 &&
                      blenderLink(blender.projects[index - 1], index - 1)}
                    {index < blender.projects.length - 1 &&
                      blenderLink(blender.projects[index + 1], index + 1)}
                  </div>
                </React.Fragment>
              )}
            />
          ),
          this,
        )}
        <Route
          exact
          path="/blender"
          render={() => (
            <React.Fragment>
              <div className="otherBanner banner" />
              <h1 className="title titleLarge">Blender</h1>
              {blender.projects.map(blenderLink, this)}
            </React.Fragment>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>
  );
}
