export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to db
    const db = getFirestore();
    db.collection("projects")
      .add({
        ...project,
        authorFirstName: "Rechol",
        authorLastName: "Raymond",
        authorId: 323281,
        createdAt: new Date()
      })
      .then(() => {
        // dispatch
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
