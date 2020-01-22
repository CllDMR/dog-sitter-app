import { Example } from "MyModels";
import { createAsyncAction, createAction } from "typesafe-actions";

export const initExample = createAction("EXAMPLE_INIT")();

export const loadExampleAsync = createAsyncAction(
  "EXAMPLE_LOAD_REQUEST",
  "EXAMPLE_LOAD_SUCCESS",
  "EXAMPLE_LOAD_FAILURE"
)<undefined, Example[], string>();

export const createExampleAsync = createAsyncAction(
  "EXAMPLE_CREATE_REQUEST",
  "EXAMPLE_CREATE_SUCCESS",
  "EXAMPLE_CREATE_FAILURE"
)<Example, Example[], string>();

export const updateExampleAsync = createAsyncAction(
  "EXAMPLE_UPDATE_REQUEST",
  "EXAMPLE_UPDATE_SUCCESS",
  "EXAMPLE_UPDATE_FAILURE"
)<Example, Example[], string>();

export const deleteExampleAsync = createAsyncAction(
  "EXAMPLE_DELETE_REQUEST",
  "EXAMPLE_DELETE_SUCCESS",
  "EXAMPLE_DELETE_FAILURE"
)<Example, Example[], Example>();
