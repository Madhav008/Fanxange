import base64

def decode_string(encoded_string):
    algorithms = ['utf-8', 'latin-1', 'base64', 'ascii', 'unicode_escape']
    
    for algorithm in algorithms:
        try:
            if algorithm == 'base64':
                decoded_bytes = base64.b64decode(encoded_string)
            else:
                decoded_bytes = encoded_string.encode(algorithm)
            decoded_string = decoded_bytes.decode('utf-8')
            return decoded_string
        except (UnicodeDecodeError, ValueError):
            continue
    
    return None




encoded_string = "WZsaFMC8YYUg2AKWytvsAakE4wmhoYUmiIUqVgrOTMOZe7DZa0NRcHj6iPrh4u9dSQQmPxau1cq+carp7z+MEIKHiOCzebg0YOzM6khztXYWHE/WA8o7KnToSth/UmQeUbe7QQmjxdYsFhT6g3MktN5h1qS+rey6zUk9UOYJFLwo+FiRCfIuv0FCZbHCLDjv5FD84YAkhy2rMAPF1T3u/lIkI6k/IiNeJL9GseByhv64FSD68FZxFZZmmBtIvzVEiDPwlIwKxq2e505SNDc9recF18SS4ifkyPOG1CAYcQwjvmHVwMQOvn+W9YHvrxATOg4eL2hfDOCh4ytcbJFJ978AkxpPdvvclOugsYkH4LjpYY5lmMbq+MDThHMB3dEE3q1WGPCEwKXdL0h5NuSF/HoH/IHHrx4o6UDmbpyPyBaW4KHsw8L1u9DvkojsMMi4kv4+HYSmDsS/Meg+U7u0lO2U5RDWSBKkBM5ElziP9d3ve4Ox4/g0aWS2bZC4EmPoi/E6FtFqXMGLkDaO+3dZrywjRj1lySiIabkL22XsGw2X7RjtdTF2QFwP/Wz/wiw096oG8bniAujTPTy1FPlhew1csg/uWUnpwAFlx6JrrbCff5vqcHRkpkwqbzXZ6/XOwG6sfLHCl7Tl6e2kJFnXo0cM0+g02HINoivXsmKHtT1syJaLT06NtUMaFW+s8QcIyN3e8wXHp5X81kiW1lX7fZJeE+CyCBuzyyMjsUFeQo2/xBBiCpW/eJLB1eesNIrlLRoZRYdw5DLEdwMZWwC+quhsyNEb6NnToCt5U4hnYQS9O+YovZBumVvPcrUx2wS+epMCD8VUtgMdIc3gnS+e6IZoKoAK5Ax7LIs2DtnNlNgOplGGcgGfaPvJrcGtRU6EvVxG6K7lFM7px8h9acM3oKU9LDU0O4DVlBvouYdyHv7h6tcLUInGXY6CVjYVTos3pTa5ynoKOO7JXxAT9sHQ2LSnideZCEZ+L5ulUZUSEoMdTqihOwJPcZl0WaAfOb32ElAMcBLFWpFk/fjUD4XWhPV+DsoBzy0J6AG8NsHHL02xH6VOl6wUmKjVlc40nunObkUevfR1RDTZdZ+XuD5pLhwLiV3KUG/YVr30bGcydbj0WVp6vJnaaPadjxD+alKor639pzV/owtnJ/Fi3vm9qFpirZTxYlIqRfNPbkNOpek/l0wg2zYTqRx08VOeowa6ckynbDIhW+XxyKzSKrLN3w==##@##da20111e15886715##@##66208abc15767ca3f7d6555d5ab8bc4b"

decoded_string = decode_string(encoded_string)
print(decoded_string)
