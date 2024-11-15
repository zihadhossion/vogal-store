import React from "react";

export default function SectionContainer({ title, children, secStyle }) {

    return (
        <section className={secStyle ? `relative py-7 md:py-16 ${secStyle}` : "relative py-7 md:py-16"} >
            <div className="pageWidth">
                <article className="text-center px-3 pb-5 md:pb-9">
                    <h2 className="text-lg md:text-2xl text-[#111] font-semibold uppercase">
                        <span className="sectionTitle">
                            {title}
                        </span>
                    </h2>
                </article>
                {children}
            </div>
        </section >
    )
};