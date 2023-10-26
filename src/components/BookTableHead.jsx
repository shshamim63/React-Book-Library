const BookTableHead = () => {
  return (
    <thead className="thread-dark p-1">
      <tr>
        <th scope="col text-center">Book ID</th>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
        <th scope="col">Pages</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
  );
};

export default BookTableHead;
