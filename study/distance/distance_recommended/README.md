# Environmental Test

Estimates the Just Noticeable  Difference (JND) in SNR level that the user in current environmental setting can recognize.
Pairs of sound clips (from the same source) are presented to the subject. The subject should select which one has a better 
quality, or the "Difference is not detectable". 
It is an implementation of the Adaptive Staircase Psychoacoustics method (3AFC, 2 down- 1 up) as proposed by Levit [1].
See [4] for full description of the method and its validation.

## Setup
Speech files should be located in `assets/jnd_noise`. File names should be formated like `[SNR]S_FILE_NAME.wav` with SNR 
ranges from 30 to 50 dB.
Accordingly update the `assets/js/env_test_main.js`. 
The speech files should be degraded with same noise type (e.g. white-noise).
In each pair of clips, a SNR level is compared to best quality (i.e. SNR 50) in the dataset.
Current files are taken from ITU-T P.501 dataset [2] and are degraded using `audiolib` package in [3]. 

## Results

Result shows the SNR level that the subject can successfully recognize its difference with a reference sample (SNR 50) in 70.7% (or more) of times.
  

## References
[1]. Levit t , H. (1992).Adaptive procedures for hearing aid prescription and other audiologic applications. Journal of the American Academy of Audiology, 3, 119-131.

[2]. [ITU-T Recommendation P. 501](https://www.itu.int/rec/T-REC-P.501-201703-I/en): P.501 : Test signals for use in telephonometry, International Telecommunication Union, Geneva, 2017.

[3]. [Microsoft Scalable Noisy Speech Dataset (MS-SNSD)](https://github.com/microsoft/MS-SNSD)

[4]. Babak Naderi and Sebastian Möller, [Application of Just-Noticeable Difference in Quality as Environment Suitability Test for Crowdsourcing Speech Quality Assessment Task](https://arxiv.org/pdf/2004.05502.pdf), 2020 Twelfth International Conference on Quality of Multimedia Experience (QoMEX), Athlone, Ireland, 2020, pp. 1-6, doi: 10.1109/QoMEX48832.2020.9123093. 