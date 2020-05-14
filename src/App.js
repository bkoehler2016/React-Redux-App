import React from "react";
import "./App.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import SpellForm from "./components/SpellForm";
import SpellsList from "./components/SpellsList";
import { spellsReducer as reducer } from "./reducers/spellsReducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>DnD 5th Edition Spells</h1>
        <SpellForm />
        <SpellsList />
      </div>
    </Provider>
  );
}
