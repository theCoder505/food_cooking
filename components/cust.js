import React, { useCallback } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { navigate } from "@/constants/recipe";
// import { navigate } from "./utils/constants";

const Toolbar = ({ localizer: { messages }, label, views, view, onNavigate, onView }) => {
  const navigateHandler = useCallback(
    (action) => {
      onNavigate(action);
    },
    [onNavigate]
  );

  const viewHandler = useCallback(
    (viewName) => {
      onView(viewName);
    },
    [onView]
  );

  const viewNamesGroup = (messages) => {
    if (views.length > 1) {
      return views.map((name) => (
        <button
          type="button"
          key={name}
          className={clsx({ "rbc-active": view === name })}
          onClick={() => viewHandler(name)}
        >
          {messages[name]}
        </button>
      ));
    }
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => navigateHandler(navigate.PREVIOUS)}>
          {messages.previous}
        </button>
        <button type="button" onClick={() => navigateHandler(navigate.NEXT)}>
          {messages.next}
        </button>
      </span>

      <span className="rbc-toolbar-label">{label}</span>

      <span className="rbc-btn-group">{viewNamesGroup(messages)}</span>
    </div>
  );
};

Toolbar.propTypes = {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

export default Toolbar;