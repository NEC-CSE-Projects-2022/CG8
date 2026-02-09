
# Dataset Details

This repository documents the datasets used in the paper:

**"Rethinking Artificial Empathy with Emotion-Calibrated Hate Detection Models"**

The proposed framework leverages emotion-aware learning by combining emotion classification and hate speech detection using two benchmark datasets.

---

## 1. GoEmotions Dataset

### Dataset Title
**GoEmotions – Fine-Grained Emotion Classification Dataset**

### Usage
Used in the first stage of the framework to train emotion classification models and generate emotion labels and emotion logits.

### Dataset Information
- **Dataset Name**: GoEmotions  
- **Source**: Google Research (via Kaggle)  
- **Domain**: Social Media (Reddit)  
- **Task**: Emotion Classification  
- **Problem Type**: Multi-Class (Converted to Single-Label)  
- **File Format**: CSV  
- **Dataset Link**:  
  https://www.kaggle.com/datasets/shivamb/go-emotions-google-emotions-dataset

### Dataset Overview
- **Total Records**: ~58,000 comments  
- **Emotion Classes**: 27 emotions + Neutral  
- **Annotation Type**: Human-annotated  
- **Language**: English  

### Preprocessing
- Converted multi-label annotations to single-label by selecting the dominant emotion.
- Removed emojis, special characters, extra punctuation, and null entries.
- Standardized text using lowercasing and whitespace normalization.

### Features Used
- Comment Text  
- Emotion Label  
- Emotion Logits  

---

## 2. Jigsaw Unintended Bias in Toxicity Classification Dataset

### Dataset Title
**Jigsaw Unintended Bias in Toxicity Classification Dataset**

### Usage
Used in the second stage of the framework for binary hate speech detection, enhanced with emotion-based features.

### Dataset Information
- **Dataset Name**: Jigsaw Toxic Comments  
- **Source**: Kaggle (Jigsaw / Conversation AI)  
- **Domain**: Online User Comments  
- **Task**: Hate / Toxicity Detection  
- **Problem Type**: Binary Classification  
- **File Format**: CSV  
- **Dataset Link**:  
  https://www.kaggle.com/competitions/jigsaw-unintended-bias-in-toxicity-classification/data

### Dataset Overview
- **Total Records**: ~1.8 million comments  
- **Primary Label**: Toxicity  
- **Additional Metadata**: Identity attributes  
- **Language**: English  

### Preprocessing
- Converted toxicity scores into binary labels (hate / non-hate).
- Removed noisy and missing entries.
- Applied SMOTE to handle class imbalance.
- Integrated predicted emotion labels and logits as additional features.

### Features Used
- Comment Text  
- Binary Hate Label  
- Emotion Labels (One-Hot Encoded)  
- Emotion Logits  

---

## Dataset Summary

The combined use of GoEmotions and Jigsaw datasets enables:
- Emotion-aware hate speech detection  
- Improved identification of implicit hate speech  
- Enhanced model interpretability  
- Robust evaluation on large-scale real-world data  

These datasets form the foundation of the proposed emotion-calibrated hate detection framework.
