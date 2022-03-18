import {url} from './api.service';

class CvService {

    /**
     * @param {string} lang
     */
    async getCv(lang) {
        return await fetch(`${url}/wp/v2/pages?slug=cv&acf_format=standard&lang=${lang}`)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) return null;
                const post = data[0];

                //Format CV data
                const cv = {
                    description: post?.content?.rendered,
                    contact: {
                        title: post?.acf?.contact_title,
                        content: post?.acf?.contact_content,
                    },
                    coreCompetences: {
                        title: post?.acf?.core_competences_title,
                        content: post?.acf?.core_competences_content,
                    },
                    softSkills: {
                        title: post?.acf?.soft_skills_title,
                        content: post?.acf?.soft_skills_content,
                    },
                    otherSkills: {
                        title: post?.acf?.other_skills_title,
                        content: post?.acf?.other_skills_content,
                    },
                    languages: {
                        title: post?.acf?.languages_title,
                        content: post?.acf?.languages_content,
                    },
                    photo: post?.acf?.photo?.sizes?.large,
                    education: [],
                    workHistory: [],
                };

                //Map work history
                post?.acf?.work_history.forEach(entry => {
                    cv.workHistory.push({
                        companyName: entry?.company_name,
                        companyUrl: entry?.company_url,
                        position: entry?.position,
                        startDate: entry?.start_date,
                        endDate: entry?.end_date,
                        responsibilities: entry?.responsibilities,
                    });
                });

                //Map education
                post?.acf?.education.forEach(entry => {
                    cv.education.push({
                        university: entry?.university,
                        field: entry?.field,
                        startDate: entry?.start_date,
                        endDate: entry?.end_date,
                        description: entry?.description,
                    });
                });

                return cv;
            })
            .catch(() => {
                return null;
            });
    }
}

export default new CvService();