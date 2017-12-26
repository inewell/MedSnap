# MedSnap
Website for MedSnap, part of my team's entry to the HackNEHS 2017 competition. My teammates were Herbert Milton Turner IV and Varun Roy.

## What is MedSnap?
MedSnap is a service that combines machine learning, medical diagnostics, and communication. This was a hackathon project, so it was done in one day under intense time pressure and is **more of an outline of what could be done than the actual realization of those hopes**. Our work contained this website, and a mobile app (which is supported by pretrained models developed in TensorFlow).
* MedSnap uses trained convolutional neural network (CNN) models to classify images for a certain kind of ailment. We focused on images that are easy for people to take, i.e. on the skin. Our three planned classifiers were for : malignancy of skin moles, degree of burn severity, and bug bite identification. Herbert got the skin mole classifier up and running with an OK level of accuracy. Note: that is not included in this repository, which only contains the codebase for the MedSnap webpage.
* The aim of MedSnap is to make diagnostic medicine more accessible, and to better connect people to doctors that they need. When they get a result that merits worry from a classification of an image (which they take with the mobile app), the app (or the website) puts them into contact with recommended doctors, and recommends informational articles on their possible affliction.
* MedSnap is for both doctors and patients. The portal on the website (which isn't really functional, remember this is a hackathon project and just a skeleton of our actual plan) allows patients and doctors to message each other, including images of problem areas taken by patients and diagnosed by our pretrained models. Doctors will be able to easily keep tabs on all their patients.

The point of this project was really just to learn more about convolutional neural networks for medical diagnostics, app development, and web development. I just worked on this webpage (Herbert worked with training the CNN models with our dataset, Varun worked on the mobile app). This was my first time doing any kind of server-side JavaScript, and I learned a lot about using Node/NPM, as well as the useful package called pug: a cleaner version of HTML that allows you to use includes, which is very helpful. I had a lot of fun learning these things, and getting to work with my amazing teammates. I think our scope was way too bit for the hackathon, and we are far from having actually realized this idea. However, potentially something like MedSnap could actually be very helpful to a lot of people, both doctors and patients. Machine learning in medicine is becoming more and more of a reality, with dermatology (for the earlier-mentioned reasons) a central field in that advance. Thus this project was both very educational for all of us and also potentially helpful at some point in the future.

## Authors
* Isaac Newell
Work on the MedSnap project not included in this repository:
* Herbert Turner trained the CNN models
* Varun Roy worked on our mobile app
I also received help from staff at the HackNEHS competition, especially:
* Jeffrey Shen
* Dr. Zufelt
