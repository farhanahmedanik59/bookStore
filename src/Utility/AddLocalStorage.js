const GetBookList = () => {
  const listString = localStorage.getItem("books");
  if (listString) {
    const listJson = JSON.parse(listString);
    return listJson;
  } else {
    return [];
  }
};

const addToLocalDb = (id) => {
  const storedList = GetBookList();
  if (storedList.includes(id)) {
    alert("fuck");
  } else {
    storedList.push(id);
    const data = JSON.stringify(storedList);
    localStorage.setItem("books", data);
  }
};

export { addToLocalDb, GetBookList };
