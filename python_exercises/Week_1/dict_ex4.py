def histogram(paragraph):
    d = dict()
    for word in paragraph:
        if word not in d:
            d[word] = 1
        else:
            d[word] += 1
    return d

def print_hist(h):
    for word in h:
        print(word, ':', h[word])

h = histogram('hippopotamus that swims')
print_hist(h)