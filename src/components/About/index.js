import React from 'react';
import coverImage from "../../assets/leahrussellheadshot.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "15%" }} alt="cover" />
      <p>Hello! My name is Leah Russell. I currently work as a Senior Software Engineering Manager at a company called Procore. Procore builds construction management software for industrial and commercial-sized projects that enables everyone on a project to stay connect on one global platform. I have been with the company just over 7 years, and I specifically oversee our Core Validation group. This group contains the Performance Engineering, Test Tooling & Frameworks, and Cloud Systems Validation teams. We focus on building internal tools that enable feature developers to focus on building their features, and the other stuff that sometimes can come along with being a developer.</p>
    </section>
  )
}

export default About;
