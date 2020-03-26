import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Posts from "./posts";
import Certificate from "./certificate"
import Course from "./course"

export default () => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
            data {
              certificates {
                title
                score
                code
              }
              courses {
                title
                progress
                url
              }
            }
          }
    }`);//hook

    console.log(data);
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Posts 
                        data={data.codigofacilitoJson.data.certificates}
                        card={Certificate}
                        title="Mis certificados"
                    />

                    <Posts 
                        data={data.codigofacilitoJson.data.courses}
                        card={Course}
                        title="Mis cursos"
                    />

                </div>
            </div>
        </section>
    )
    
    
}