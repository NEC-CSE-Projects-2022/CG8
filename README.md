
# Team Number – Project Title

## Team Info
- 22471A05F7 — **Guggilam Chinmayee** ( [LinkedIn](https://linkedin.com/in/xxxxxxxxxx) )
_Work Done: Problem formulation, model design_

- 22471A05K8 — **Pichala Yagnapriya** ( [LinkedIn](https://linkedin.com/in/xxxxxxxxxx) )
_Work Done: Data preprocessing, EDA, model training and evaluation_

- 22471A05K7 — **Yadavalli Karthika** ( [LinkedIn](https://linkedin.com/in/xxxxxxxxxx) )
_Work Done: Dataset handling, feature engineering, baseline models_

---

## Abstract
Online hate speech is often implicit, emotionally masked, or expressed through sarcasm and frustration, making it difficult for traditional moderation systems to detect. This project proposes an emotion-calibrated hate detection framework that integrates emotional intelligence into content moderation. A two-stage pipeline is used where emotion classification is first performed, and the extracted emotional features are then incorporated into a hate speech classifier. The approach improves accuracy, interpretability, and real-time applicability, achieving up to 96.16% accuracy and a macro F1-score of 0.88 on benchmark datasets.

---

## Paper Reference (Inspiration)
👉 **[Paper Title xxxxxxxxxx
  – Author Names xxxxxxxxxx
 ](Paper URL here)**
Original conference/IEEE paper used as inspiration for the model.

---

## Our Improvement Over Existing Paper
Unlike traditional hate detection approaches that rely solely on lexical or sentiment cues, our work integrates emotion logits and dominant emotional signals directly into the hate classification pipeline. This enables better detection of implicit, sarcastic, and emotionally nuanced hate speech. The proposed framework is lightweight, explainable, and optimized for real-time deployment, offering improved accuracy while reducing computational overhead compared to complex hybrid architectures.

---

## About the Project
**What it does:**
Detects hate speech by combining textual content with emotional context using artificial empathy.

**Why it is useful:**
Improves moderation accuracy, reduces bias, and enables ethical AI-based decision-making for online platforms.

Workflow:
Input Text → Preprocessing → Emotion Classification → Emotion Feature Integration → Hate Speech Classification → Output (Hate / Non-Hate + Emotion Context)
---

## Dataset Used
👉 GoEmotions Dataset
👉 Jigsaw Toxic Comment Dataset


**Dataset Details:**
GoEmotions: 58k Reddit comments labeled across 27 emotions + neutral (converted to single-label)

Jigsaw: User comments labeled for toxicity (converted to binary classification)

---

## Dependencies Used
Python, PyTorch, HuggingFace Transformers, Scikit-learn, LightGBM, FastText, NumPy, Pandas, Matplotlib

---

## EDA & Preprocessing
Text normalization and lowercasing

Removal of emojis, non-ASCII characters, extra punctuation

Handling missing values

SMOTE applied to balance hate and non-hate classes

---

## Model Training Info
Emotion Models: BERT, DistilBERT, LightGBM, FastText

Hate Classifiers: LightGBM, Feedforward Neural Network, Logistic Regression

Optimizer: AdamW

Learning Rate: 2e-5

Batch Size: 16

Environment: Google Colab (Tesla T4 GPU)

---

## Model Testing / Evaluation
Metrics: Accuracy, Precision, Recall, Macro F1-score

Stratified train-test split (80/20)

Confusion matrix and emotion-wise performance analysis

---

## Results
Best Model: DistilBERT emotion logits + LightGBM

Accuracy: 96.16%

Macro F1-score: 0.88

Significant improvement in detecting covert and sarcastic hate speech

---

## Limitations & Future Work
Currently supports English text only

Emotion expression varies across cultures and languages

Future scope includes multilingual support, multimodal emotion inputs, and real-time dashboards

---

## Deployment Info
Cloud-deployable as REST API

Suitable for SaaS-based content moderation platforms

Easily integrable with existing moderation pipelines

---
