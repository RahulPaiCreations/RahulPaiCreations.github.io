import React from "react";
import Interactive from "react-interactive";
import { Link, Route, Switch } from "react-router-dom";
import blender from "./blender.json"; // TODO: use Axios or fetch to get this dynamically
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

export default function Blender() {
  return (
    <div>
      <Switch>
        {blender.projects.map(
          (project) => (
            <Route
              exact
              path={`/blender/${project.name}`}
              render={() => (
                <div>
                  <div className="titleDate">
                    <h1
                      className="title titleLarge"
                      style={{ display: "inline" }}
                    >
                      {projectTitle(project)}
                    </h1>
                    {project.alias != null &&
                      project.alias.trim().length > 0 && (
                        <div className="alias">"{project.alias}"</div>
                      )}
                    <div className="date">{dateFormat(project.date)}</div>
                  </div>
                </div>
              )}
            />
          ),
          this,
        )}
        <Route
          exact
          path="/blender"
          render={() => (
            <div>
              <div className="otherBanner banner" />
              <h1 className="title titleLarge">Blender</h1>
              {blender.projects.map(
                (project, index) => (
                  <div className="blenderLink">
                    <Interactive as={Link} to={`/blender/${project.name}`}>
                      <img
                        src={`../../assets/${project.name}/thumbnail.jpg`}
                        alt="thumbnail"
                      />
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
                ),
                this,
              )}
            </div>
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
