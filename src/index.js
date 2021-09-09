import './style.css';
import fetchPoke from './fetchPoke.js';
import loadPoke from './loadPoke.js';
import { fetchLikes } from './fetchInteractions.js';

window.onload = async () => {
  loadPoke(await fetchPoke(), await fetchLikes());
};