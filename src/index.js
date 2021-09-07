import _ from 'lodash';
import './style.css';
import fetchPoke from './fetchPoke';
import loadPoke from './loadPoke';
import { fetchLikes } from './fetchInteractions';

window.onload = async () => {
  loadPoke(await fetchPoke(), await fetchLikes());
};