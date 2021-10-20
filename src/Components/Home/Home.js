import React from 'react';
import vacc from '../../Images/vacc.jpg';
import bill from '../../Images/bill.jpg';
import { Link } from 'react-router-dom';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div className='simp-space'>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-12 col-md-6">
                    <h1 className='text-secondary'>Even One Vaccinated Member Can Cut Family’s COVID RISk</h1>
                    <p>The chances are reduced even further with each additional vaccinated or otherwise immune family member, according to new data.</p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={vacc} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="row pt-5 mt-3 top-story d-flex justify-content-center">
                <div className="col-12 col-md-6">
                    <h2>Top Story</h2>
                    <img src={bill} className='img-fluid mt-2' alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <p>photo of Bill Clinton Oct. 15, 2021 -- Former President Bill Clinton was hospitalized Tuesday in Southern California with a non-COVID-19 related infection, according to a statement from his spokesperson.
                        Angel Urena told The Associated Press that Clinton, 75, was admitted to the University of California Irvin Medical Center but “is on the mend, in good spirits and is incredibly thankful to the doctors, nurses and staff providing him with excellent care.”
                        Clinton’s doctors said the former president was given IV antibiotics and fluids. "After two days of treatment, his white blood cell count is trending down and he is responding to antibiotics well,” the doctors, Alpesh Amin, MD, and Lisa Bardack, MD, said, according to the AP. “The California-based medical team has been in constant communication with the President’s New York-based medical team, including his cardiologist. We hope to have him go home soon.”
                        A spokesman for the Clinton Foundation told the news service Clinton was in California for private events related to his charitable organization.</p>
                </div>
            </div>
            <div className="mt-3 py-3 doctors">
                <Doctors />
            </div>
            <div className='text-center mt-5'>
                <h5>The words care, therapy, treatment, and intervention overlap in a semantic field, and thus they can be synonymous depending on context. Moving rightward through that order, the connotative level of holism decreases and the level of specificity (to concrete instances) increases. Thus, in health care contexts (where its senses are always noncount), the word care tends to imply a broad idea of everything done to protect or improve someone's health (for example, as in the terms preventive care and primary care, which connote ongoing action), although it sometimes implies a narrower idea (for example, in the simplest cases of wound care or postanesthesia care, a few particular steps are sufficient, and the patient's interaction with that provider is soon finished). In contrast, the word intervention tends to be specific and concrete, and thus the word is often countable; for example, one instance of cardiac catheterization is one intervention performed, and coronary care (noncount) can require a series of interventions (count). At the extreme, the piling on of such countable interventions amounts to interventionism, a flawed model of care lacking holistic circumspection—merely treating discrete problems (in billable increments) rather than maintaining health. Therapy and treatment, in the middle of the semantic field, can connote either the holism of care or the discreteness of intervention, with context conveying the intent in each use. Accordingly, they can be used in both noncount and count senses (for example, therapy for chronic kidney disease can involve several dialysis treatments per week).</h5>
                <Link to='/health' className="btn btn-outline-info mt-3">Get Treatment</Link>
            </div>
        </div>
    );
};

export default Home;