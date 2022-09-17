import React from "react";
import ReactPaginate from "react-paginate";
import Layout from "../../UI/Layout";
import styles from "../../styles/SelectTemplates.module.css";
import { useState } from "react";
const ResumeTemplates = () => {
  const templatesData = [
    {
      id: 1,
      image: "url",
      data: "Template 1",
    },
    {
      id: 2,
      image: "url",
      data: "Template 2",
    },
    {
      id: 3,
      image: "url",
      data: "Template 3",
    },
    {
      id: 4,
      image: "url",
      data: "Template 4",
    },
    {
      id: 5,
      image: "url",
      data: "Template 5",
    },
    {
      id: 6,
      image: "url",
      data: "Template 6",
    },
    {
      id: 7,
      image: "url",
      data: "Template 7",
    },
  ];
  const [templates, setTemplates] = useState(templatesData);
  const [pageNumber, setPageNumber] = useState(0);

  console.log(templates);

  const itemsPerPage = 3;
  const itemsVisited = pageNumber * itemsPerPage;

  const pageCount = Math.ceil(templates.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Layout>
      <main className={styles.templatePage}>
        <section id="contact" className={` ${styles.sec} ${styles.templates}`}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.top}>
                <h1>Templates to win recruiters over</h1>
                <h3>
                  Wide selection of designs. Carefully optimised for clarity and
                  impact. One click layouts - no formatting required.
                </h3>
              </div>
              <div className={styles.templates_wrapper}>
                {templates
                  .slice(itemsVisited, itemsVisited + itemsPerPage)
                  .map((template) => (
                    <div className={styles.template} key={template.id}>
                      {template.data}
                    </div>
                  ))}
              </div>
              <ReactPaginate
                previousLabel="< previous"
                nextLabel="nex >"
                breakLabel="..."
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtns"}
                previousLinkClassName={"prevBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ResumeTemplates;
