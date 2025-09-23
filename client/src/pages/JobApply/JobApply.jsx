import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(jobId, user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkdin = form.linkdin.value;
    const github = form.github.value;
    const resumi = form.resumi.value;
    console.log(linkdin, github, resumi);

    const application = {
      jobId,
      applicant: user.email,
      linkdin,
      github,
      resumi,
    };
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h3 className="text-center">
        Apply for this job: <Link to={`/jobs/${jobId}`}>details</Link>
      </h3>
      <form
        onSubmit={handleApplyFormSubmit}
        className="flex justify-center items-cente my-6"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Linkdin Link</label>
          <input
            type="url"
            name="linkdin"
            className="input"
            placeholder="Linkdin profile link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Link"
          />

          <label className="label">Resumi Link</label>
          <input
            type="url"
            name="resumi"
            className="input"
            placeholder="Resumi Link"
          />
          <button type="submit" className="btn">
            Apply
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
